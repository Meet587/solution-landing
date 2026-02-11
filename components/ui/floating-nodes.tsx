"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
    id: number;
    x: number;
    y: number;
    delay: number;
}

export function FloatingNodes() {
    const [nodes, setNodes] = useState<Node[]>([]);

    useEffect(() => {
        // Generate random nodes on mount
        const generatedNodes: Node[] = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 2,
        }));
        setNodes(generatedNodes);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-30" aria-hidden="true">
            <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="oklch(0.7 0.26 290)" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="oklch(0.65 0.25 250)" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="oklch(0.75 0.18 200)" stopOpacity="0.8" />
                    </linearGradient>
                </defs>

                {/* Connection lines */}
                {nodes.map((node, i) => {
                    const nextNode = nodes[(i + 1) % nodes.length];
                    return (
                        <motion.line
                            key={`line-${node.id}`}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${nextNode.x}%`}
                            y2={`${nextNode.y}%`}
                            stroke="url(#nodeGradient)"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: node.delay }}
                        />
                    );
                })}

                {/* Nodes */}
                {nodes.map((node) => (
                    <motion.circle
                        key={`node-${node.id}`}
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r="4"
                        fill="url(#nodeGradient)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 1.2, 1],
                            opacity: [0, 1, 0.8],
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 6,
                            delay: node.delay,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
