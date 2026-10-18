interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton = ({ onClick }: ChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-6
        right-6
        w-14
        h-14
        rounded-full
        bg-blue-600
        text-white
        text-2xl
        shadow-lg
        hover:bg-blue-700
        transition
        flex
        items-center
        justify-center
      "
    >
      💬
    </button>
  );
};

export default ChatButton;