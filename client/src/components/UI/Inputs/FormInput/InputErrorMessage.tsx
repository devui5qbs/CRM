import { AnimatePresence, motion } from "framer-motion";
interface IInputErrorMessageProps {
  error: boolean;
  errorMessage: string | undefined;
}
const InputErrorMessage = ({
  error,
  errorMessage,
}: IInputErrorMessageProps) => {
  return (
    <AnimatePresence initial={error}>
      {error && (
        <motion.p
          initial={{
            opacity: 0,
            y: "-100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: "-100%",
            zIndex: -1,
          }}
          className="text-[#e83a3a] text-[16px]"
        >
          {errorMessage}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default InputErrorMessage;
