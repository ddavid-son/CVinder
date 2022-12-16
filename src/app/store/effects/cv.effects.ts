import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {cvError, fetchCV, setCV, setCVLoading} from "../actions/cv.actions";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {CvService} from "../../shared/services/cv.service";

@Injectable()
export class CvEffects {

  fetchCV$ = createEffect(() =>
    this.actions.pipe(ofType(fetchCV),
      mergeMap(() => {
        this.store.dispatch(setCVLoading({isLoading: true}));
        return this.cvService.fetchCV().pipe(
          tap(() => {
            this.store.dispatch(setCVLoading({isLoading: false}));
          }),
          map((cv) => setCV({cv: cv})
          ),
          catchError((error) => {
            console.log(error, "error should be called")
            return of(cvError({error}))
          })
        )
      })
    ));

  constructor(private cvService: CvService,
              private store: Store,
              private actions: Actions) {
  }
}
