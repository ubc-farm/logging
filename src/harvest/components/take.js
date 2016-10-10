const Take = () => {
  return (
    <td>
      <label>Quantity</label>
      <input type="number" step="1" min="0"/>
      <label>Units</label>
      <select>
        <option>kg</option>
      </select>
    </td>
  );
}

export default Take;
