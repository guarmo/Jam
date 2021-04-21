// @flow
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSongs } from "../actions/data";

const Songs: function = ({ getSongs }) => {
  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default connect(null, { getSongs })(Songs);
