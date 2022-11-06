import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {authError, authSuccess, loginUser, registerUser, setAuthLoading} from "../actions/auth.actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {AuthService} from "../../shared/services/auth.service";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions.pipe(ofType(loginUser),
      mergeMap((action) => {
          this.store.dispatch(setAuthLoading({isLoading: true}))
          return this.authService.logIn(action.loginDto).pipe(
            map((response) => {
                this.router.navigate(['dashboard']);
                return authSuccess({...response, isLoading: false})
              }
            ),
            catchError((error) => {
                return of(authError({error}))
              }
            )
          )
        })
    ));

  signup$ = createEffect(() =>
    this.actions.pipe(ofType(registerUser),
      mergeMap((action) => {
          this.store.dispatch(setAuthLoading({isLoading: true}))
          return this.authService.signUp(action.signupDto).pipe(
            map((response) =>{
              this.router.navigate(['dashboard']);
              return authSuccess({...response, isLoading: false})
            }
            ),
            catchError((error) =>
              of(authError({error}))
            )
          )
        }
      )
    ));

  constructor(private authService: AuthService,
              private store: Store,
              private router: Router,
              private actions: Actions) {
  }
}
