import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit {
  private currentUrl: string;
  private links: Array<any> = [
    {
      'title': '用户管理',
      'icon': 'link',
      'sublinks': [
        {
          'title': '用户列表',
          'link': ['/admin/user_list'],
        },
        {
          'title': '角色列表',
          'link': ['/admin/role_list'],
        },
        {
          'title': '服务列表',
          'link': ['/admin/service_list'],
        },
        {
          'title': '权限列表',
          'link': ['/admin/right_list'],
        }
      ]
    }
  ];

  // [
  //   {
  //     'title': 'Home',
  //     'icon': 'dashboard',
  //     'link': ['/']
  //   },
  //   {
  //     'title': 'Client',
  //     'icon': 'usd',
  //     'link': ['/client']
  //   },
  //   {
  //     'title': 'Sub menu',
  //     'icon': 'link',
  //     'sublinks': [
  //       {
  //         'title': 'Page 2',
  //         'link': ['/page/2'],
  //       },
  //       {
  //         'title': 'Page 3',
  //         'link': ['/page/3'],
  //       }
  //     ]
  //   },
  //   {
  //     'title': 'External Link',
  //     'icon': 'google',
  //     'link': ['http://google.com'],
  //     'external': true,
  //     'target': '_blank'
  //   },
  //   {
  //     'title': 'External Links',
  //     'icon': 'link',
  //     'sublinks': [
  //       {
  //         'title': 'Github',
  //         'link': ['http://github.com'],
  //         'icon': 'github',
  //         'external': true,
  //         'target': '_blank'
  //       },
  //       {
  //         'title': 'Yahoo',
  //         'link': ['http://yahoo.com'],
  //         'icon': 'yahoo',
  //         'external': true,
  //         'target': '_blank'
  //       }
  //     ]
  //   }
  // ];

  private account : Account; 
  //constructor(private userServ: UserService, public router: Router, private auth: AuthService) {
  constructor(public router: Router,private auth: AuthService){
    // getting the current url
    this.router.events.subscribe((evt) => this.currentUrl = evt.url);
    this.account = auth.getProfile();
  }

  public ngOnInit() {
    // TODO
  }

}
