import styles from "./ClearButton.module.css";

const ClearButton = ({ text2, Limpar }) => {
  return (
    <>
      {text2 && (
        <div>
          <button type="reset" className={styles.btn} onClick={Limpar}>
            {text2}
          </button>
        </div>
      )}
    </>
  );
};

export default ClearButton;
