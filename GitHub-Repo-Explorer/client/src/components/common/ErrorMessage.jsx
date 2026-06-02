import { AlertTriangle } from "lucide-react";

function ErrorMessage({
  message,
}) {
  return (
    <div
      className="
      bg-red-50
      border
      border-red-200
      rounded-xl
      p-4
      text-red-600
      flex
      items-center
      gap-3
      "
    >
      <AlertTriangle />
      {message}
    </div>
  );
}

export default ErrorMessage;