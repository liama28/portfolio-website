import React from "react";

interface SkillProps {
  icon?: React.ReactNode;
  text?: string;
  color?: string;
}

const Skill: React.FC<SkillProps> = ({ icon, text, color = "white" }) => {
  const borderColor = `border-${color}`;
  const textColor = `text-${color}`;
  return (
    <div
      className={`rounded-full flex text-lg items-center font-semibold px-4 py-2.5 border-2 border-solid ${borderColor} ${textColor}`}
    >
      {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
      {text && <span>{text}</span>}
    </div>
  );
};

export default Skill;
