import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

const AllProducts = gql`
query {
	getProducts{
		id
		name
		image
		price
		color
		length
		size
	}
}
`;

const deleteProduct = gql`
	mutation deleteProduct(
	$productId: Float!
	) {
		deleteProduct(id: $productId) { id }
	}
`;

@Component({
	selector: 'main',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

	loading: boolean;
	getProducts: any;

	private querySubscription: Subscription;

	constructor(private apollo: Apollo) { }

	ngOnInit(): void {
		this.querySubscription = this.apollo.watchQuery<any>({
			query: AllProducts
		})
		.valueChanges
		.subscribe(({ data, loading }) => {
			this.loading = loading;
			this.getProducts = data.getProducts;
		});
	}

	ngOnDestroy() {
		this.querySubscription.unsubscribe();
	}

	deleteItem(event, product) {
		this.apollo.mutate({
			mutation: deleteProduct,
			variables: {
				productId: product,
			}
		}).subscribe(({ data }) => {
			document.querySelector(`#product-${product}`).remove()
			location.reload()
		},(error) => {
			console.log('There was an error =>', error);
		});
	}
}
