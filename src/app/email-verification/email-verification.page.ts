import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.page.html',
  styleUrls: ['./email-verification.page.scss'],
})
export class EmailVerificationPage implements OnInit {

  verifying = false;
  verified = false;
  error = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.verifying = true;
    const token = this.route.snapshot.queryParamMap.get('token');
    const userId = this.route.snapshot.queryParamMap.get('userid');

    // Llamada a tu backend para verificar el correo electrónico
    this.http.get(`http://http://localhost:3000/v1/user-accounts/:id/verification?token=${token}&userid=${userId}/:flag`)
      .subscribe(
        () => {
          this.verifying = false;
          this.verified = true;
        },
        () => {
          this.verifying = false;
          this.error = true;
        }
      );
  }

}
