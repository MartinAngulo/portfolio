import React, { useContext, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import useDrag from "./useDrag";
import styles from "./Carrousel.module.css";
import "./hideScrollbar.css";


const getItems = () =>
  Array(50)
    .fill(0)
    .map((_, ind) => ({ id: ind + 1 }));

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
  return (
    <button className={isFirstItemVisible ? styles.btn_left_disable : styles.btn_left} disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  return (
    <button className={isLastItemVisible ? styles.btn_right_disable : styles.btn_right} disabled={isLastItemVisible} onClick={() => scrollNext()}>
    </button>
  );
}


export default function Carrousel(props: { open: (id: number) => void }) {

  const [items, setItems] = useState(getItems);

  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => (
    ev: React.MouseEvent
  ) =>
    dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });

  const handleItemClick = (id: number) => {
    if (!dragging) {
      props.open(id);
    }
  }

  return (
    <div className={styles.container}>
      <div onMouseLeave={dragStop}>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          {items.map(({ id }) => (
            <figure className={styles.figure}>
              <img
                className={styles.img}
                draggable={false}
                onClick={() => handleItemClick(id)}
                src={require(`../../img/carrousel/img-${id}.jpg`)}
                id={"item-" + id}
              />
            </figure>
          ))}
        </ScrollMenu>
      </div>
    </div>
  )
}


