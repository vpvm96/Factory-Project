export type MessageObj = {
  message: string;
  state: "success" | "error";
};

export default function AlertMessage({
  messageObj: { message, state },
}: {
  messageObj: MessageObj;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "🔥";

  return (
    <p
      className={`w-full rounded-xl p-2 text-center  ${
        isSuccess ? "bg-green-300" : "bg-red-300"
      }`}
    >
      {icon} {message}
    </p>
  );
}
