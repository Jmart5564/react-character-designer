import React from 'react';

export default function Creator({ head, middle, bottom, handleChange }) {
  return (
    <div className="creator">
      <label>Head</label>
      <select value={head} onChange={(e) => handleChange('head', e.target.value)}>
        <option value="cat">Cat</option>
        <option value="raccoon">Raccoon</option>
        <option value="possum">Opossum</option>
      </select>
      <label>Middle</label>
      <select value={middle} onChange={(e) => handleChange('middle', e.target.value)}>
        <option value="armour">Armour</option>
        <option value="duster">Duster</option>
        <option value="cloak">Cloak</option>
      </select>
      <label>Bottom</label>
      <select value={bottom} onChange={(e) => handleChange('bottom', e.target.value)}>
        <option value="skeleton">Skeleton</option>
        <option value="boot">Boot</option>
        <option value="feet">Feet</option>
      </select>
    </div>
  );
}
