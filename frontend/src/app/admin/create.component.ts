import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

const createProduct = gql`
	mutation createProduct(
	$productSize: String!
	$productLength: Float!
	$productColor: String!
	$productPrice: Float!
	$productImage: String!
	$productName: String!
	) {
		createProduct(
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

@Component({
	selector: 'main',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	createProductsForm;

	alertsuccess: boolean

	pname: string
	pimage: string
	pprice: string
	pcolor: string
	plength: number
	psize: string

	constructor(
		private apollo: Apollo,
		private formBuilder: FormBuilder
	) {
		this.createProductsForm = this.formBuilder.group({
			name: '',
			image: '',
			price: '',
			color: '',
			length: '',
			size: ''
		});
	}

	ngOnInit(): void {
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
		console.log(productsData)
		this.apollo.mutate({
			mutation: createProduct,
			variables: {
				productSize: productsData.size,
				productLength: parseFloat(productsData.length),
				productColor: productsData.color,
				productPrice: parseFloat(productsData.price),
				productImage: productsData.image,
				productName: productsData.name,
			}
		}).subscribe(({ data }) => {
			console.log('Product published =>', data);
			this.alertsuccess = true
		},(error) => {
			console.log('There was an error =>', error);
		});
	}
}
