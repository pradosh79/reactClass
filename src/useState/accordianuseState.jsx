import React,{ useState } from 'react'

export default function AccordianuseState() {
    const [activeIndex, setActiveIndex] = useState(null);
    const items = [
        { title: 'Section 1', content: 'Content for section 1' },
        { title: 'Section 2', content: 'Content for section 2' },
        { title: 'Section 3', content: 'Content for section 3' },
      ];
    const handleItemClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="accordion">
        {items.map((item, index) => (
          <div key={index}>
            <div
              className="accordion-title"
              onClick={() => handleItemClick(index)}
              style={{
                cursor: 'pointer',
                padding: '10px',
                fontWeight: 'bold',
                backgroundColor: '#f1f1f1',
              }}
            >
              {item.title}
            </div>
            {activeIndex === index && (
              <div className="accordion-content" style={{ padding: '10px', backgroundColor: '#e2e2e2' }}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    );
}

/****
 * 
 * 
 * form
F Name
L Name
Ph no

Store Local storage
Card show after submit

Edit
 */