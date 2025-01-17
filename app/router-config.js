import { AccountController } from "./controllers/AccountController.js";
import { PokedexController } from "./controllers/PokedexController.js";
import { SandboxPokeController } from "./controllers/SandboxPokeController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PokedexController, SandboxPokeController],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




