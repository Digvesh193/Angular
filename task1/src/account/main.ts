import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AccountModule } from "./account.module";

platformBrowserDynamic().bootstrapModule(AccountModule)
.catch(error=>console.log(error))