import { useEffect, useState } from "react";

const useMouse = (ref?: React.RefObject<HTMLDivElement>) => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setX(e.clientX);
			setY(e.clientY);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return { x, y };
};

export default useMouse;
