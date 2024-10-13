// @ts-nocheck
import React, { useState, useEffect } from "react";
import { ZoomIn, ZoomOut, Moon, Sun, ChevronUp, Search } from "lucide-react";
import { Button } from "../../components/ui/button";

const TreeNode = ({
  node,
  level = 0,
  onToggle,
  onFocus,
  expanded,
  focusedNode,
  darkMode,
}) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expanded.includes(node.id);
  const isFocused = focusedNode === node.id;

  return (
    <div className="relative animate-in fade-in duration-300 mt-10 w-full ">
      <div className="flex flex-col items-center">
        {/* Card with controls */}
        <div
          className={`
            relative w-64 rounded-md shadow-lg overflow-hidden
            transition-all duration-300 ease-in-out
            hover:shadow-xl hover:scale-105
            ${darkMode ? "bg-gray-800 text-white" : "bg-white"}
            ${isFocused ? "ring-2 ring-blue-500 ring-opacity-50" : ""}
            ${
              isExpanded
                ? darkMode
                  ? "border-blue-700"
                  : "border-blue-200"
                : darkMode
                ? "border-gray-700"
                : "border-gray-200"
            }
            border
          `}
        >
          <div
            className={`
            px-4 py-2 font-semibold text-center
            transition-colors duration-300
            ${darkMode ? "bg-gray-700" : "bg-gray-200"}
            ${isFocused ? (darkMode ? "bg-blue-900" : "bg-blue-100") : ""}
            ${isExpanded ? (darkMode ? "bg-gray-600" : "bg-gray-300") : ""}
          `}
          >
            {node.title}
          </div>
          <div
            className={`px-4 py-3 text-center border-t ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {node.content}
          </div>

          {/* Control buttons */}
          <div className="absolute top-1 right-1 flex gap-1">
            {hasChildren && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(node.id);
                }}
                className={`
                  w-6 h-6 rounded shadow flex items-center justify-center transition-all duration-200
                  ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-white hover:bg-gray-50"
                  }
                `}
              >
                <ChevronUp
                  size={14}
                  className={`transform transition-transform duration-300 ${
                    isExpanded ? "" : "rotate-180"
                  }`}
                />
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onFocus(node.id);
              }}
              className={`
                w-6 h-6 rounded shadow flex items-center justify-center transition-all duration-200
                ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white hover:bg-gray-50"
                }
              `}
            >
              <Search size={14} />
            </button>
          </div>
        </div>

        {/* Connector lines for children */}
        {hasChildren && (
          <div
            className={`
            h-8 w-px
            transition-all duration-300 ease-in-out
            ${darkMode ? "bg-gray-600" : "bg-gray-300"}
            ${isExpanded ? "opacity-100" : "opacity-0 h-0"}
          `}
          />
        )}

        {/* Children container with transitions */}
        {hasChildren && (
          <div
            className={`
            relative
            transition-all duration-500 ease-in-out
            ${
              isExpanded
                ? "opacity-100 transform-none"
                : "opacity-0 transform translate-y-[-20px] h-0 overflow-hidden"
            }
          `}
          >
            {/* Horizontal line above children */}
            <div
              className={`absolute top-0 left-1/2 w-full -translate-x-1/2 h-px ${
                darkMode ? "bg-gray-600" : "bg-gray-300"
              }`}
            />

            <div className="flex gap-12 pt-8">
              {node.children.map((child, index) => (
                <div key={child.id} className="relative">
                  {/* Vertical line to child */}
                  <div
                    className={`absolute top-0 left-1/2 h-8 w-px -translate-x-1/2 ${
                      darkMode ? "bg-gray-600" : "bg-gray-300"
                    }`}
                  />
                  <TreeNode
                    node={child}
                    level={level + 1}
                    onToggle={onToggle}
                    onFocus={onFocus}
                    expanded={expanded}
                    focusedNode={focusedNode}
                    darkMode={darkMode}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const HierarchicalTree = () => {
  const [zoom, setZoom] = useState(70);
  const [expanded, setExpanded] = useState(["A"]);
  const [focusedNode, setFocusedNode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const treeData = {
    id: "A",
    title: "Root Node",
    content: "Main Content",
    children: [
      {
        id: "B",
        title: "Section 1",
        content: "First major section",
        children: [
          {
            id: "B1",
            title: "Subsection 1.1",
            content: "Detailed content",
            children: [
              {
                id: "B1a",
                title: "Topic 1.1.1",
                content: "Specific details",
                children: [
                  {
                    id: "B1a1",
                    title: "Subtopic 1.1.1.1",
                    content: "Deep level content",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "C",
        title: "Section 2",
        content: "Second major section",
        children: [
          {
            id: "C1",
            title: "Subsection 2.1",
            content: "More content here",
            children: [
              {
                id: "C1a",
                title: "Topic 2.1.1",
                content: "Detailed information",
                children: [
                  {
                    id: "C1a1",
                    title: "Subtopic 2.1.1.1",
                    content: "Even more details",
                    children: [
                      {
                        id: "C1a1x",
                        title: "Deep Node 2.1.1.1.1",
                        content: "Extremely specific content",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "C",
        title: "Section 2",
        content: "Second major section",
        children: [
          {
            id: "C1",
            title: "Subsection 2.1",
            content: "More content here",
            children: [
              {
                id: "C1a",
                title: "Topic 2.1.1",
                content: "Detailed information",
                children: [
                  {
                    id: "C1a1",
                    title: "Subtopic 2.1.1.1",
                    content: "Even more details",
                    children: [
                      {
                        id: "C1a1x",
                        title: "Deep Node 2.1.1.1.1",
                        content: "Extremely specific content",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "C",
        title: "Section 2",
        content: "Second major section",
        children: [
          {
            id: "C1",
            title: "Subsection 2.1",
            content: "More content here",
            children: [
              {
                id: "C1a",
                title: "Topic 2.1.1",
                content: "Detailed information",
                children: [
                  {
                    id: "C1a1",
                    title: "Subtopic 2.1.1.1",
                    content: "Even more details",
                    children: [
                      {
                        id: "C1a1x",
                        title: "Deep Node 2.1.1.1.1",
                        content: "Extremely specific content",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const handleToggle = (nodeId) => {
    setExpanded((prev) =>
      prev.includes(nodeId)
        ? prev.filter((id) => id !== nodeId)
        : [...prev, nodeId]
    );
  };

  const findNodePath = (node, targetId, path = []) => {
    if (node.id === targetId) {
      return [...path, node.id];
    }
    if (node.children) {
      for (const child of node.children) {
        const foundPath = findNodePath(child, targetId, [...path, node.id]);
        if (foundPath) return foundPath;
      }
    }
    return null;
  };

  const handleFocus = (nodeId) => {
    const path = findNodePath(treeData, nodeId);
    if (path) {
      setExpanded(path);
      setFocusedNode(nodeId);
    }
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    // <div
    //   className={`p-8 min-h-screen transition-colors duration-300 ${
    //     darkMode ? "bg-gray-900" : "bg-white"
    //   }`}
    // >
    <div>
      <div className="flex gap-2 items-center justify-center ">
        <Button variant="default" size="sm" onClick={handleZoomIn}>
          <ZoomIn size={16} className="mr-1" /> Zoom In
        </Button>
        <Button variant="default" size="sm" onClick={handleZoomOut}>
          <ZoomOut size={16} className="mr-1" /> Zoom Out
        </Button>
        <Button variant="default" size="sm" onClick={toggleDarkMode}>
          {darkMode ? (
            <Sun size={16} className="mr-1" />
          ) : (
            <Moon size={16} className="mr-1" />
          )}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

      <div
        className={`
          transform-gpu transition-all duration-500 ease-in-out flex justify-center
          ${isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}
        `}
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: "top center",
        }}
      >
        <TreeNode
          node={treeData}
          onToggle={handleToggle}
          onFocus={handleFocus}
          expanded={expanded}
          focusedNode={focusedNode}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default HierarchicalTree;
