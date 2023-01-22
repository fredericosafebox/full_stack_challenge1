function Modal({ children }: React.PropsWithChildren) {
  return (
    <div data-cy="modal" className="modal__wrapper">
      {children}
    </div>
  );
}

export default Modal;
