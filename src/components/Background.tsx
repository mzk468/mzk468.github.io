import { useEffect, useRef } from "react";
import css from "../styles/Background.module.css"
import { Colors } from "./ui/Colors";

export function Background() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const fontSize = 30;
        ctx.font = `bold 2rem AkkuratMono`;
        ctx.fillStyle = '#000';
        ctx.textBaseline = 'top';

        ctx.rotate((-1 * Math.PI) / 18);

        const lineHeight = fontSize * 1.5;

        const words = [
            'bread',
            'beans',
            'toast',
            'avocado',
            'oven',
            'butter',
            'freeshavocado'
        ].map(word => btoa(word));

        const colors = Object.values(Colors);

        const drawText = () => {
            const rows = Math.ceil(1.35 * canvas.height / lineHeight);

            const textWidth = ctx.measureText(".").width;

            for (let row = 0; row < rows; row++) {
                for (let col = -10; col < canvas.width / textWidth; col++) {
                    const randomWord = words[Math.floor(Math.random() * words.length)];
                    const textWidth = ctx.measureText(randomWord).width;

                    for (let charIndex = 0; charIndex < randomWord.length; charIndex++) {
                        const char = randomWord[charIndex];
                        const charColor = colors[Math.floor(Math.random() * colors.length)];

                        ctx.fillStyle = charColor;

                        const x = col * textWidth + ctx.measureText(randomWord.slice(0, charIndex)).width;
                        const y = row * lineHeight;

                        ctx.fillText(char, x, y);
                    }
                }
            }
        };


        drawText();
    }, []);

    return <canvas className={css.canvas} ref={canvasRef} />
}