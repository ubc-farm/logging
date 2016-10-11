const Take = () => {
  return (
    <td>
      <label>
        <h5>Quantity</h5>
        <input type="number" step="1" min="0"/>
      </label>
      <label>
        <h5>Units</h5>
        <select>
          <option>kg</option>
        </select>
      </label>
    </td>
  );
}

export default Take;
