declare module 'vanta/dist/vanta.net.min' {
  const NET: (config: Record<string, unknown>) => { destroy: () => void };
  export default NET;
}
