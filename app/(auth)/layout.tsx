interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex items-center justify-center min-h-svh">
      <div className="flex w-full max-w-sm flex-col gap-4">
        {children}
        </div>
    </div>
  );
}
