import React from "react";

interface SkillProps {
  text?: string;
  color?: string;
  icon?: React.ReactNode;
  contents?: React.ReactNode;
}

const SkillGroup: React.FC<SkillProps> = ({
  text,
  color = "white",
  icon,
  contents,
}) => {
  const borderColor = `border-${color}`;
  const textColor = `text-${color}`;

  return (
    <div
      className={`w-full h-auto rounded-3xl flex flex-col font-semibold px-4 py-2.5 border-2 border-solid ${borderColor} ${textColor}`}
    >
      <div className="flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {text && <span>{text}</span>}
      </div>
      <div className="mt-2">
        {contents && <div>{contents}</div>}
      </div>
    </div>
  );
};

export default SkillGroup;