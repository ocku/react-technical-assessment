// vendors
import { useIntl } from 'react-intl';
// domain
import { validateProductPartial } from '@/domain/validators/models/product.validator';
// hooks
import { useForm } from '../../../../hooks/use-form/use-form.hook';
// contexts
import { useEditProductContextConsumer } from '../../context/edit-product.context';
// constants
import intlConstants from '@/app/intl/constants/intl.constants';
// components
import { LabeledInput } from '@/app/components/labeled-input/labeled-input.component';
import { LabeledTextarea } from '@/app/components/labeled-textarea/labeled-textarea.component';
// styles
import layoutStyles from '@/app/styles/layout.module.css';
import { calculateProductPrice } from '@/domain/services/product.service';

export const EditProductForm = () => {
  const { data, deleteProduct, updateProduct } =
    useEditProductContextConsumer();

  const { values, canSave, save, parsed, ...handlers } = useForm({
    defaultValues: data!,
    validator: validateProductPartial,
    onSave: updateProduct,
  });

  const { formatMessage } = useIntl();

  const price = calculateProductPrice({
    ...data!,
    ...(parsed || {}),
  });

  return (
    <>
      <header>
        <hgroup>
          <h1>{values.name}</h1>
          <p>{values.description}</p>
        </hgroup>

        <div>
          <p>{price.raw}</p>
          <p>{price.withTax}</p>
        </div>
      </header>

      <main>
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

          <div className={layoutStyles.group}>
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

            <button type="button" onClick={deleteProduct}>
              {formatMessage({
                id: intlConstants.actions.delete,
              })}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
