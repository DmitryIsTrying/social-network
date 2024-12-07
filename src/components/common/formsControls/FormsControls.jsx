import styles from "./FormsControls.module.css";

const FormControl = ({ input, meta, ...props }) => {
  const isError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (isError ? styles.error : "")}>
      {props.children}
      {isError && <div>{meta.error}</div>}
    </div>
  );
};

export const Textarea = ({ input, meta, ...props }) => {
  return (
    <FormControl meta={meta}>
      <textarea {...props} {...input} />
    </FormControl>
  );
};

export const Input = ({ input, meta, ...props }) => {
  return (
    <FormControl meta={meta}>
      <input {...props} {...input} />
    </FormControl>
  );
};
