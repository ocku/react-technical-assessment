// vendors
import { useIntl } from 'react-intl';
// domain
import { ProductModel } from '@/domain/models/product.model';
import { validateProduct } from '@/domain/validators/models/product.validator';
// hooks
import { useForm } from '@/app/hooks/use-form/use-form.hook';
import { useUUID } from '@/app/hooks/use-uuid/use-uuid.hook';
// components
import { LabeledInput } from '@/app/components/labeled-input/labeled-input.component';
import { LabeledTextarea } from '@/app/components/labeled-textarea/labeled-textarea.component';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';

export const CreateProductForm = ({
  onSave,
}: {
  onSave: (product: ProductModel) => void;
}) => {
  const productId = useUUID();

  const { formatMessage } = useIntl();

  const { values, canSave, save, ...handlers } = useForm({
    validator: validateProduct,
    onSave: onSave,
    defaultValues: {
      id: productId,
      name: '',
      price: '',
      description: '',
      taxPercentage: '',
    },
  });

  return (
    <form>
      <LabeledInput
        name="name"
        required
        defaultValue={values.name}
        label={formatMessage({
          id: intlConstants.models.product.name,
        })}
        {...handlers}
      />

      <LabeledTextarea
        rows={5}
        required
        name="description"
        defaultValue={values.description}
        label={formatMessage({
          id: intlConstants.models.product.description,
        })}
        {...handlers}
      />

      <LabeledInput
        required
        name="price"
        type="number"
        defaultValue={values.price}
        label={formatMessage({
          id: intlConstants.models.product.price,
        })}
        {...handlers}
      />

      <LabeledInput
        required
        name="taxPercentage"
        type="number"
        defaultValue={values.taxPercentage}
        label={formatMessage({
          id: intlConstants.models.product.taxPercentage,
        })}
        {...handlers}
      />

      <div role="group">
        <button
          type="button"
          disabled={!canSave}
          aria-disabled={!canSave}
          onClick={save}
        >
          {formatMessage({
            id: intlConstants.actions.save,
          })}
        </button>
      </div>
    </form>
  );
};
