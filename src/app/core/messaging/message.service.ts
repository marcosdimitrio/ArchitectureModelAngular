import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(
        private snackBar: MatSnackBar,
        private matDialog: MatDialog,
    ) { }

    success(message: string) {
        this.snackBar.open(message, '', {
            duration: 3000
        });
    }

    confirm(title: string, message: string, options: string[]): Observable<string> {
        const config = {
            position: {
                top: '10%',
            },
            data: {
                title: title,
                message: message,
                options: options,
            }
        };
        let matDialogRef = this.matDialog.open(ConfirmDialogComponent, config);

        return matDialogRef.afterClosed();
    }

    error(message: string) {
        const config = {
            position: {
                top: '5%',
            },
            data: {
                title: "Error",
                message: message,
                options: ["Ok"],
            }
        };
        let matDialogRef = this.matDialog.open(ErrorDialogComponent, config);

        return matDialogRef.afterClosed();
    }

}
