// fonction de création d'un champ réutilisable
function InputField({ id, type, placeholder, value, onChange }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gris rounded p-2 mb-4"
    />
  );
}

export default InputField;
