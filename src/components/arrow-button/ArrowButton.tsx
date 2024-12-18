import { forwardRef } from 'react';
import clsx from 'clsx';
import arrow from '../../images/arrow.svg';
import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

type ArrowButtonProps = {
	onClick: OnClick;
	isOpen: boolean;
};

export const ArrowButton = forwardRef<HTMLButtonElement, ArrowButtonProps>(
	({ onClick, isOpen }, ref) => {
		return (
			<button
				aria-label='Открыть/Закрыть форму параметров статьи'
				tabIndex={0}
				className={clsx(styles.container, { [styles.container_open]: isOpen })}
				onClick={onClick}
				ref={ref}>
				<img
					src={arrow}
					alt='Иконка стрелочки'
					className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
				/>
			</button>
		);
	}
);

ArrowButton.displayName = 'ArrowButton';
