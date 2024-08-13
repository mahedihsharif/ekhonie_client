import { useState } from "react";
import {
  deepClone,
  isEmpty,
  mapObjectToKeys,
} from "../utils/helpers/deep-object";
import { mapValuesToState } from "../utils/helpers/formHelper";

/**
 * @typedef {Object} Param
 * @property {Object} init
 * @property {(Object|boolean)} validate
 *
 * create form using this useForm easily
 * @param {Param} param
 * @returns
 */

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleChange = (e) => {
    const { name: key, value, type, checked } = e.target;
    const oldState = deepClone(state);

    const { error } = getErrors();

    if (type === "checkbox") {
      oldState[key].value = checked;
    } else {
      oldState[key].value = value;
    }

    if (oldState[key].touched && error[key]) {
      oldState[key].error = error[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);
  };

  //handle submit
  const handleSubmit = (e, cb) => {
    e.preventDefault();

    const { hasError, error, values } = getErrors();

    cb({
      hasError,
      error,
      values,
      focused: mapObjectToKeys(state, "focused"),
      touched: mapObjectToKeys(state, "touched"),
    });
  };

  //handle focus
  const handleFocus = (e) => {
    const { name: key } = e.target;
    const oldState = deepClone(state);
    oldState[key].focused = true;

    if (!oldState[key].touched) {
      oldState[key].touched = true;
    }
    setState(oldState);
  };

  //handle blur
  const handleBlur = (e) => {
    const key = e.target.name;
    const { error } = getErrors();
    const oldState = deepClone(state);
    if (error[key] && oldState[key].touched) {
      oldState[key].error = error[key];
    } else {
      oldState[key].error = "";
    }
    oldState[key].focused = false;
    setState(oldState);
  };

  const getErrors = () => {
    let hasError = null,
      error = null;
    const values = mapObjectToKeys(state, "value");

    if (typeof validate === "boolean") {
      hasError = validate;
      error = mapObjectToKeys(state, "error");
    } else if (typeof validate === "function") {
      const errorsFromCB = validate(values);
      hasError = !isEmpty(errorsFromCB);
      error = errorsFromCB;
    } else {
      throw new Error("validity must be boolean or function");
    }

    return {
      hasError,
      error,
      values,
    };
  };

  const clear = () => {
    const newState = mapValuesToState(init, true);
    setState(newState);
  };

  return {
    formState: state,
    handleChange,
    handleBlur,
    handleFocus,
    handleSubmit,
    clear,
  };
};

export default useForm;
