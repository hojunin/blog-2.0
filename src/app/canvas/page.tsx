'use client';
import React, { useEffect, useState } from 'react';

const nodesAndEdges = {
  nodes: [
    {
      id: 'f0fceef836948b1e',
      type: 'text',
      text: 'shortcuts',
      x: -125,
      y: -30,
      width: 250,
      height: 60,
    },
    {
      id: '3e584cebccb440f8',
      type: 'text',
      text: '숏컷노드',
      x: 220,
      y: 30,
      width: 250,
      height: 60,
    },
    {
      id: '1806df073d2e778b',
      type: 'text',
      text: '도도도돋돍',
      x: 220,
      y: -160,
      width: 250,
      height: 95,
      color: '5',
    },
    {
      id: '3c5518d927e14229',
      type: 'link',
      url: 'https://i.imgur.com/rPMP5Mz.png',
      x: -235,
      y: 180,
      width: 360,
      height: 160,
    },
    {
      id: '09e54d74e8ab9f9f',
      x: 320,
      y: 200,
      width: 118,
      height: 70,
      type: 'file',
      file: '개발.md',
    },
    {
      id: 'f890705747fcb62c',
      x: -55,
      y: 480,
      width: 400,
      height: 400,
      type: 'file',
      file: 'canvas test.canvas',
    },
    {
      id: '4694b317de560aa3',
      x: 460,
      y: 480,
      width: 400,
      height: 400,
      type: 'file',
      file: '개발블로그/함수형 프로그래밍(Functional Programming).md',
    },
    {
      id: '79bd9b32b1949d6a',
      x: 579,
      y: -65,
      width: 321,
      height: 301,
      type: 'text',
      text: 'https://asset-server.vercel.app/images/vip.png',
    },
  ],
  edges: [
    {
      id: 'cf89688cac098747',
      fromNode: 'f0fceef836948b1e',
      fromSide: 'right',
      toNode: '3e584cebccb440f8',
      toSide: 'left',
    },
    {
      id: 'd953804fe41323be',
      fromNode: 'f0fceef836948b1e',
      fromSide: 'left',
      toNode: '1806df073d2e778b',
      toSide: 'left',
    },
    {
      id: 'da5cf942f7721a22',
      fromNode: '3c5518d927e14229',
      fromSide: 'right',
      toNode: '3e584cebccb440f8',
      toSide: 'left',
    },
    {
      id: '834a3f8f1ba8e0d9',
      fromNode: '09e54d74e8ab9f9f',
      fromSide: 'top',
      toNode: '3e584cebccb440f8',
      toSide: 'bottom',
    },
    {
      id: '6bccf5d9574d9b55',
      fromNode: '3c5518d927e14229',
      fromSide: 'bottom',
      toNode: 'f890705747fcb62c',
      toSide: 'top',
    },
    {
      id: 'fabb43915e571ac1',
      fromNode: 'f890705747fcb62c',
      fromSide: 'right',
      toNode: '4694b317de560aa3',
      toSide: 'left',
    },
    {
      id: 'eef32851da3c3241',
      fromNode: '09e54d74e8ab9f9f',
      fromSide: 'bottom',
      toNode: '4694b317de560aa3',
      toSide: 'top',
    },
    {
      id: 'e0b5170c1ccf1705',
      fromNode: '09e54d74e8ab9f9f',
      fromSide: 'right',
      toNode: '79bd9b32b1949d6a',
      toSide: 'left',
    },
    {
      id: '26236a3466ec2dba',
      fromNode: '79bd9b32b1949d6a',
      fromSide: 'bottom',
      toNode: '4694b317de560aa3',
      toSide: 'top',
    },
  ],
};

const CanvasTest = () => {
  const { nodes, edges } = nodesAndEdges;
  // 모든 노드의 위치를 고려하여 viewBox 계산
  const calculateViewBox = () => {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    nodes.forEach((node) => {
      if (node.x < minX) minX = node.x;
      if (node.y < minY) minY = node.y;
      if (node.x + node.width > maxX) maxX = node.x + node.width;
      if (node.y + node.height > maxY) maxY = node.y + node.height;
    });

    return `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;
  };

  // 초기 viewBox 설정
  const initialViewBox = calculateViewBox();
  const [viewBox, setViewBox] = useState(initialViewBox);

  useEffect(() => {
    // 노드 위치가 변경되면 viewBox 다시 계산
    setViewBox(calculateViewBox());
  }, [nodes]);

  return (
    <svg width={1000} height={1000} viewBox={viewBox}>
      {/* 에지 그리기 */}
      {edges.map((edge) => {
        // 에지의 시작과 끝 노드 찾기
        const fromNode = nodes.find((node) => node.id === edge.fromNode);
        const toNode = nodes.find((node) => node.id === edge.toNode);

        // 에지의 시작과 끝 좌표 계산
        const fromX = fromNode.x + fromNode.width / 2;
        const fromY = fromNode.y + fromNode.height;
        const toX = toNode.x + toNode.width / 2;
        const toY = toNode.y;

        return (
          <line
            key={edge.id}
            x1={fromX}
            y1={fromY}
            x2={toX}
            y2={toY}
            stroke="black"
            strokeWidth={2}
          />
        );
      })}

      {/* 노드 그리기 */}
      {nodes.map((node) => (
        <g key={node.id} transform={`translate(${node.x},${node.y})`}>
          <rect
            key={node.id}
            width={node.width}
            height={node.height}
            rx={8}
            fill="lightblue"
            stroke="black"
          />
          <text x={30} y={40} fontSize="14px" fill="black" textAnchor="middle">
            {node.text}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default CanvasTest;
