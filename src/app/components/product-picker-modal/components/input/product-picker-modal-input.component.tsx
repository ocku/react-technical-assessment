import { useProductPickerModalContextConsumer } from '../../context/product-picker-modal.context';

export const ProductPickerModalInput = () => {
  const { search, onSearchChange } = useProductPickerModalContextConsumer();

  return <input onChange={onSearchChange} defaultValue={search} />;
};
