import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Global } from '../../services/global'
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import swal from 'sweetalert'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home'])
          }
        },
        error => {
          console.log(error)
          this._router.navigate(['**'])
        }
      );
    })
  }

  delete(id) {

    swal({
      title: "Estas a punto de borrar este articulo!",
      text: "Una vez eliminado no podrás recuperarlo",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    })
      .then((willDelete) => {
        if (willDelete) {
          this._articleService.delete(id).subscribe(
            response => {
              this._router.navigate(['/blog']);
            },
            error => {
              console.log(error)
              this._router.navigate(['/blog']);
            }
          )
          swal("El ariculo se elimino exitosamente!", {
            icon: "success",
          });
        } else {
          swal("Tranquilo, nada se ha borrado :)");
        }
      });
  }

}