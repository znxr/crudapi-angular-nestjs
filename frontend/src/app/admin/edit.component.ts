import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';

const updateProduct = gql`
	mutation updateProduct(
	$productId: Float!
	$productSize: String!
	$productLength: Float!
	$productColor: String!
	$productPrice: Float!
	$productImage: String!
	$productName: String!
	) {
		updateProduct(
		id: $productId
		size: $productSize
		length: $productLength
		color: $productColor
		price: $productPrice
		image: $productImage
		name: $productName
		) {
			name
		}
	}
`;

const findProduct = gql`
	query getProduct($productId: Float!){
		getProduct(id: $productId) {
			name
			image
			price
			color
			length
			size
		}
	}
`;

@Component({
	selector: 'main',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	editProductsForm;

	alertsuccess: boolean

	pname: string
	pimage: string
	pprice: string
	pcolor: string
	plength: number
	psize: string

	loading: boolean;
	getProduct: any;

	private querySubscription: Subscription;


	constructor(
		private route: ActivatedRoute,
		private apollo: Apollo,
		private formBuilder: FormBuilder
	) {
		this.editProductsForm = this.formBuilder.group({
			name: '',
			image: '',
			price: '',
			color: '',
			length: '',
			size: ''
		});
	}

	ngOnInit(): void {
		this.querySubscription = this.apollo.watchQuery<any>({
			query: findProduct,
			variables: {
				productId: parseFloat(this.route.snapshot.paramMap.get('id'))
			}
		})
		.valueChanges
		.subscribe(({ data, loading }) => {
			this.loading = loading;
			this.getProduct = data.getProduct;

			this.pname = data.getProduct.name
			this.pimage = data.getProduct.image
			this.pprice = data.getProduct.price
			this.pcolor = data.getProduct.color
			this.plength = data.getProduct.length
			this.psize = data.getProduct.size

			console.log(data)
		});
	}

	productDetails(event: any, type: number){
		switch (type) {
			case 0:
				this.pname = event.target.value
				break;
			case 1:
				this.pimage = event.target.value
				break;
			case 2:
				this.pprice = event.target.value
				break;
			case 3:
				this.pcolor = event.target.value
				break;
			case 4:
				this.plength = event.target.value
				break;
			case 5:
				this.psize = event.target.value
				break;
		}
	}

	onSubmit(productsData) {
		this.apollo.mutate({
			mutation: updateProduct,
			variables: {
				productId: parseFloat(this.route.snapshot.paramMap.get('id')),
				productSize: productsData.size,
				productLength: parseFloat(productsData.length),
				productColor: productsData.color,
				productPrice: parseFloat(productsData.price),
				productImage: productsData.image,
				productName: productsData.name,
			}
		}).subscribe(({ data }) => {
			console.log('Product saved =>', data);
			this.alertsuccess = true
		},(error) => {
			console.log('There was an error =>', error);
		});
	}

}
