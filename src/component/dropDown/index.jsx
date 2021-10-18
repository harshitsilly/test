import { useCallback, useState, useEffect } from "react";
import "../../App.scss";

const DropDown = ({ selectedIndex, items }) => {
  const [header, setHeader] = useState(items[selectedIndex]);
  const [showModal, setShowModal] = useState(false);
  const onPressDropDown = useCallback((event) => {
    event.stopPropagation();
    setShowModal(true);
  }, []);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      setShowModal(false);
    });
    return () => document.removeEventListener("click");
  }, []);
  const onClickDropDownItem = useCallback(
    (event) => {
      event.stopPropagation();
      const index = parseInt(event.target.getAttribute("data-index"));
      setHeader(items[index]);
      setShowModal(false);
    },

    [items]
  );
  return (
    <div class="dropDownContainer">
      <div className="dropDown" tabindex="0" onClick={onPressDropDown}>
        {header}
      </div>

      {showModal && (
        <div className="dropDownContent" onClick={onClickDropDownItem}>
          {items.map((element, index) => (
            <div
              tabindex={index + 1}
              className="dropDown dropDownItem"
              key={element}
              data-index={index}
            >
              {element}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
