import { app } from './app';

const DEFAULT_PORT = 3000;

// eslint-disable-next-line node/no-process-env -- expected
const PORT = process.env.PORT ?? DEFAULT_PORT;

app.listen(PORT, (): void => {
  global.console.log('Server started');
});
