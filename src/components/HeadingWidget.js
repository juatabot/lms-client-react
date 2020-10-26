import React from "react";

const HeadingWidget = ({ widget }) =>
  <div class="input-group">
    <input id="input-area" type="text" class="form-control" aria-label="Text input with dropdown button" />
    <div class="input-group-append">
      <select className="btn">
        <option>Heading 1</option>
        <option>Heading 2</option>
        <option>Heading 3</option>
        <option>Heading 4</option>
      </select>
    </div>
  </div>

export default HeadingWidget