import {map, of} from "rxjs";

of(1, 2, 3).pipe(map(x => x + '!!!'));