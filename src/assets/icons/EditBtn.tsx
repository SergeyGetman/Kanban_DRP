const EditIcon = ({ alt }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      aria-label={alt}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487a2.25 2.25 0 113.182 3.182l-9.75 9.75a4.5 4.5 0 01-1.591 1.06l-3.227 1.075a.75.75 0 01-.949-.949l1.075-3.227a4.5 4.5 0 011.06-1.591l9.75-9.75z"
      />
    </svg>
  );
};

export default EditIcon;
