webpackJsonp([1],{"8E3F":function(e,t,r){"use strict";r.d(t,"a",function(){return o});var o={mailFormat:function(e){var t=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;return e.value&&""!=e.value&&(e.value.length<=5||!t.test(e.value))?{incorrectMailFormat:!0}:null},telephoneFormat:function(e){var t=/(00|\+)\d{12}$/i;return e.value&&""!=e.value&&(e.value.length<=5||!t.test(e.value))?{incorrectTelephoneFormat:!0}:null}}},PeCv:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("/oeL"),n=r("T2Au"),i=r("w30b"),a=r("SLty");r.d(t,"PostingModule",function(){return c});var s=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},c=function(){function e(){}return e}();c=s([r.i(o.b)({imports:[i.a,n.a],declarations:[a.a]})],c)},SLty:function(e,t,r){"use strict";var o=r("BkNc"),n=r("9ilZ"),i=r("mSFe"),a=r("/oeL"),s=r("bm2B"),c=r("8E3F"),l=r("omBq");r.d(t,"a",function(){return d});var u=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t,r,o,n,i){this.fb=e,this.activatedRoute=t,this.dataService=r,this.router=o,this.infoService=n,this.sb=i,this.bloodGroups=["A+","A-","B+","B-","O+","O-","AB+","AB-"],this.grabIdAndGetInfo()}return e.prototype.grabIdAndGetInfo=function(){this.activatedRoute.snapshot.url[0]?(this.isEdit=!0,this.getDonorInfo(this.activatedRoute.snapshot.url[0].path)):this.infoService.userId?(this.isEdit=!0,this.buildForm()):(this.isEdit=!1,this.buildForm())},e.prototype.getDonorInfo=function(e){var t=this;this.dataService.getDonorInfo(e).subscribe(function(r){t.infoService.userId=e,t.infoService.userData=r,t.buildForm()},function(e){console.log(e),t.sb.emitErrorSnackBar("This account is currently non-existant"),t.router.navigate(["/map"])})},e.prototype.onRemove=function(){var e=this;return this.dataService.deleteDonor(this.infoService.userId).subscribe(function(t){e.infoService.clearData(),e.form.reset(),e.sb.emitSuccessSnackBar("You have successfully deleted your info"),e.router.navigate(["/map"])},function(e){return console.log(e)})},e.prototype.onSubmit=function(e){var t=this;return this.infoService.userId?this.dataService.updateDonor(this.infoService.userId,e).subscribe(function(e){t.router.navigate(["/success"])},function(e){return console.log(e)}):this.dataService.addDonor(e).subscribe(function(e){t.infoService.userId=e._id,t.router.navigate(["/success"])},function(e){return console.log(e)})},e.prototype.onChangeLocationRequest=function(){this.router.navigate(["/map"])},e.prototype.buildForm=function(){this.infoService.userData?this.form=this.fb.group({firstName:[this.infoService.userData.firstName||"",s.g.required],lastName:[this.infoService.userData.lastName||"",s.g.required],email:[this.infoService.userData.email||"",c.a.mailFormat],telephone:[this.infoService.userData.telephone||"",c.a.telephoneFormat],bloodGroup:[this.infoService.userData.bloodGroup||"",s.g.required],longitude:[this.infoService.userData.longitude||"",s.g.required],latitude:[this.infoService.userData.latitude||"",s.g.required],address:[this.infoService.userData.address||"",s.g.required]}):this.form=this.fb.group({firstName:["",s.g.required],lastName:["",s.g.required],email:["",c.a.mailFormat],telephone:["",c.a.telephoneFormat],bloodGroup:["",s.g.required],longitude:["",s.g.required],latitude:["",s.g.required],address:["",s.g.required]})},e.prototype.isIncorrectMailFormat=function(e){return this.form.get(e).hasError("incorrectMailFormat")},e.prototype.isIncorrectTelephoneFormat=function(e){return this.form.get(e).hasError("incorrectTelephoneFormat")},e}();d=u([r.i(a.m)({selector:"posting",template:r("iRI4")}),f("design:paramtypes",["function"==typeof(m=void 0!==s.h&&s.h)&&m||Object,"function"==typeof(p=void 0!==o.a&&o.a)&&p||Object,"function"==typeof(v=void 0!==n.a&&n.a)&&v||Object,"function"==typeof(h=void 0!==o.b&&o.b)&&h||Object,"function"==typeof(b=void 0!==i.a&&i.a)&&b||Object,"function"==typeof(g=void 0!==l.a&&l.a)&&g||Object])],d);var m,p,v,h,b,g},iRI4:function(e,t){e.exports='\r\n<div class="container">\r\n    <h1 *ngIf="isEdit">Edit you info</h1>\r\n    <h1 *ngIf="!isEdit">Add you info</h1>\r\n    <div class="row">\r\n        <div class="col-md-6">\r\n            \r\n                <form (ngSubmit)="onSubmit(form.value)" [formGroup]="form" *ngIf="form">\r\n                        <div class="form-group">\r\n                            <label for="">First name </label>\r\n                            <input type="text" class="form-control" id="" placeholder="Enter your first name" formControlName="firstName">\r\n                        </div>\r\n                        <div class="form-group">\r\n                            <label for="">Last name </label>\r\n                            <input type="text" class="form-control" id="" placeholder="Enter your last name" formControlName="lastName">\r\n                        </div>\r\n                        <div class="form-group">\r\n                            <label for="">Email Address </label>\r\n                            <input type="email" class="form-control" id="" placeholder="Enter email address" formControlName="email">\r\n                            <p *ngIf="form" [hidden]="!isIncorrectMailFormat(\'email\')" class="text-danger"> Please Enter a valid email </p>\r\n                        </div>\r\n                        <div class="form-group">\r\n                            <label for="">Phone Number </label>\r\n                            <input type="text" class="form-control" id="" placeholder="Enter phone number" formControlName="telephone" required>\r\n                            <p *ngIf="form" [hidden]="!isIncorrectTelephoneFormat(\'telephone\')" class="text-danger"> Please Enter a valid phone number</p>\r\n                        </div>\r\n                        <div class="form-group">\r\n                            <label for="">Blood Group </label>\r\n                            <select class="form-control bg-white xs-inline loadServices" formControlName="bloodGroup">\r\n                                        <option *ngFor="let item of bloodGroups" value="{{item}}">{{item}}</option>\r\n                                </select>\r\n                        </div>\r\n                        <div class="form-group">\r\n                            <label for="">Longitude </label>\r\n                            <input type="text" class="form-control" id="" formControlName="longitude">\r\n                        </div>\r\n                        <div class="form-group">\r\n                            <label for="">Latitude </label>\r\n                            <input type="text" class="form-control" id="" formControlName="latitude">\r\n                        </div>\r\n                        <div class="form-group">\r\n                            <label for="">Address </label>\r\n                            <input type="text" class="form-control" id="" formControlName="address">\r\n                        </div>\r\n                    \r\n                    \r\n                    \r\n                        <button type="submit" class="btn btn-primary" [disabled]="!form.valid"> Submit</button>\r\n                        <div class="btn btn-warning" (click)="onChangeLocationRequest()">Get Back to Map</div>\r\n                        <div class="btn btn-danger" *ngIf="infoService.userId" (click)="onRemove()">Remove My Posting</div>\r\n                    \r\n                    </form>\r\n                <hr />\r\n                \r\n        </div>\r\n    </div>\r\n</div>\r\n'},w30b:function(e,t,r){"use strict";var o=r("/oeL"),n=r("BkNc"),i=r("SLty");r.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},s=[{path:" ",component:i.a},{path:"**",component:i.a}],c=function(){function e(){}return e}();c=a([r.i(o.b)({imports:[n.c.forChild(s)],exports:[n.c]})],c)}});