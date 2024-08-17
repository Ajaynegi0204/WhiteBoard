import React, { useContext } from "react";
import classes from "./index.module.css";
import cx from "classnames";
import { LuRectangleHorizontal } from "react-icons/lu";
import { FaArrowRight, FaDownload, FaEraser, FaFont, FaPaintBrush, FaRedoAlt, FaRegCircle, FaSlash, FaUndoAlt } from "react-icons/fa";
import { TOOL_ITEMS } from "../../constants";
import boardContext from "../../store/board-context";
const ToolBar = () => {
  const { activeToolItem, changeToolHandler, undo, redo } = useContext(boardContext);

  const handleDownloadClick = () => {
    const canvas = document.getElementById("canvas");
    const data = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = data;
    anchor.download = "board.png";
    anchor.click();

  }
  return (
    <div className={classes.container}>

      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.BRUSH,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.BRUSH)}
      >
        <FaPaintBrush></FaPaintBrush>
      </div>


      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.LINE,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.LINE)}
      >
        <FaSlash></FaSlash>
      </div>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.RECTANGLE,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.RECTANGLE)}
      >
        <LuRectangleHorizontal></LuRectangleHorizontal>
      </div>

      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.CIRCLE,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.CIRCLE)}
      >
        <FaRegCircle></FaRegCircle>
      </div>


      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.ARROW,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.ARROW)}
      >
        <FaArrowRight></FaArrowRight>
      </div>


      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.ERASER,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.ERASER)}
      >
        <FaEraser></FaEraser>
      </div>


      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.TEXT,
        })}
        onClick={() => changeToolHandler(TOOL_ITEMS.TEXT)}
      >
        <FaFont></FaFont>
      </div>


      <div
        className={classes.toolItem}
        onClick={undo}
      >
        <FaUndoAlt></FaUndoAlt>
      </div>


      <div
        className={classes.toolItem}
        onClick={redo}
      >
        <FaRedoAlt></FaRedoAlt>
      </div>


      <div
        className={classes.toolItem}
        onClick={handleDownloadClick}
      >
        <FaDownload></FaDownload>
      </div>




    </div>
  );
};

export default ToolBar;
