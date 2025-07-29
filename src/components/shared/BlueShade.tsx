type CircleProps = {
  size: string;
  thickness?: string;
  variant?: "solid" | "hollow";
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  color?: string;
};

const BlueShade: React.FC<CircleProps> = ({ size, position = {}, color = "blue", variant = "solid", thickness = "20px" }) => {
  
    const { top, left, right, bottom } = position;

    const style: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: "50%",
    position: "absolute",
    top,
    left,
    right,
    bottom,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: variant === "solid" ? color : "transparent",
    border: variant === "hollow" ? `${thickness} solid ${color}` : undefined,
  };

  return <div style={style}></div>;
  
}

export default BlueShade
