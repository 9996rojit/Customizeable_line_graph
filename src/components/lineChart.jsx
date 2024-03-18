/* eslint-disable react/prop-types */

export const LineChart = ({ data, width = 1200, height = 800, guides = 5, colors = [] }) => {
    // Calculate the maximum value in the data
    const maxDataValue = Math.max(...data);
  
    // Increase padding to accommodate guide numbers
    const padding = 50;
  
    // Calculate the scaling factor for x and y axes
    const xScale = (width - 2 * padding) / (data.length - 1);
    const yScale = (height - 2 * padding) / maxDataValue;
  
    // Generate the points string for the path
    const points = data.map((value, index) => {
      const x = index * xScale + padding;
      const y = height - value * yScale - padding;
      return `${x},${y}`;
    }).join(' ');
  
    // Generate the circles for each data point
    const circles = data.map((value, index) => {
      const cx = index * xScale + padding;
      const cy = height - value * yScale - padding;
      return <circle key={`circle-${index}`} cx={cx} cy={cy} r={4} fill="blue" />;
    });
  
    // Generate the vertical grid lines and labels
    const verticalLines = Array.from({ length: guides }).map((_, index) => {
      const x = (index + 1) * xScale + padding;
      return (
        <g key={`vertical-line-${index}`}>
          <line
            x1={x}
            y1={padding}
            x2={x}
            y2={height - padding}
            stroke="lightgray"
            strokeWidth="1"
          />
        </g>
      );
    });
  
    // Generate the horizontal grid lines and labels
    const horizontalLines = Array.from({ length: guides }).map((_, index) => {
      const guideValue = maxDataValue / guides * (index + 1);
      const y = height - (guideValue * yScale) - padding;
      return (
        <g key={`horizontal-line-${index}`}>
          <line
            x1={padding}
            y1={y}
            x2={width - padding}
            y2={y}
            stroke="lightgray"
            strokeWidth="1"
          />
          {/* Left side label */}
          <text x={padding - 5} y={y} fontSize="10" textAnchor="end" alignmentBaseline="middle" fill="black">{parseFloat(guideValue).toFixed(2)}</text>
          {/* Right side label */}
          <text x={width - padding + 5} y={y} fontSize="10" textAnchor="start" alignmentBaseline="middle" fill="black">{parseFloat(guideValue).toFixed(2)}</text>
        </g>
      );
    });
  
    // Generate the path for the line graph
    const path = `M${padding},${height - padding} ${points}`;
  
    // Calculate the height of each color section
    const sectionHeight = (height - 2 * padding) / guides;
  
    // Generate rectangles for the background with colors
    const rectangles = Array.from({ length: guides }).map((_, index) => {
      const y = height - (index + 1) * sectionHeight - padding;
      const color = colors[index] || '#f7f7f7'; // Default color if no color specified
      return <rect key={`rect-${index}`} x={padding} y={y} width={width - 2 * padding} height={sectionHeight} fill={color} />;
    });
  
    // // Generate the background rectangle for each guide in vertical direction
    // const verticalRectangles = Array.from({ length: data.length - 1 }).map((_, index) => {
    //   const x = index * xScale + padding;
    //   const color = colors[index % colors.length] || '#f7f7f7'; // Cycle through colors if not enough provided
    //   const rectWidth = xScale - 1; // Adjust width to not cover the guide area
    //   return <rect key={`vertical-rect-${index}`} x={x} y={padding} width={rectWidth} height={height - 2 * padding} fill={color} />;
    // });
  
    // Generate the background rectangle for each guide in horizontal direction
    const horizontalRectangles = Array.from({ length: guides }).map((_, index) => {
      const y = height - (index + 1) * sectionHeight - padding;
      const color = colors[index] || '#f7f7f7'; // Default color if no color specified
      return <rect key={`horizontal-rect-${index}`} x={padding} y={y} width={width - 2 * padding} height={sectionHeight} fill={color} opacity={0.5} />;
    });
  
    return (
      <div>
        <div style={{display: 'flex'}}><span></span></div>
      <svg width={width} height={height}>
        {/* Draw background rectangles */}
        {rectangles}
        {/* Draw background rectangles for vertical guides */}
        {/* {verticalRectangles} */}
        {[
            {color:"#ffffff",opacity:0},
            {color:"#fcd5be",opacity:1},
            {color:"#fff9e7",opacity:1},
            {color:"#e7fcf2",opacity:1}
          ].map((item,index)=>(
            <rect
            fill={item.color}
            x={`${index * width / data.length - padding}`}
            y={`${0 + padding}`}
            width={`${width / data.length}`}
            height={`${height -(padding *2)}`}
            opacity={`${item.opacity}`}
            key={index}
          />
          ))}
        {/* Draw background rectangles for horizontal guides */}
        {horizontalRectangles}
        {/* Draw horizontal grid lines */}
        {horizontalLines}
        {/* Draw vertical grid lines */}
        {verticalLines}
        {/* Draw the line */}
        <path
          fill="none"
          stroke="black"
          strokeWidth="1"
          d={path}
        />
        {/* Draw the circles */}
        {circles}
        {/* Draw the x-axis */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="black"
          strokeWidth="1"
        />
        {/* Draw the y-axis */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="black"
          strokeWidth="1"
        />
      </svg></div>
    );
  }
  