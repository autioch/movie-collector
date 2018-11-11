import React from 'react';

export default function SuggestionMask({ diff }) {
  return (
    <div className="item-suggestion-mask">
      {diff.map((item) =>
        <span key={item.id} className={`item-suggestion-mask-item item-suggestion-mask-item--${item.type}`} >
          {item.content}
        </span>
      )}
    </div>
  );
}
