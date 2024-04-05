

import { test, expect } from '@playwright/test';
import { spec } from 'node:test/reporters';

test('testTitle' , async({page}) => {
    await page.goto('http://localhost:3000/');
    await expect(page).toHaveTitle('Datos Personales'); 

})
test('testH1' , async({page})=> {
    await page.goto('http://localhost:3000/');
    const title = await page.locator('//h1');
    await expect(title).toHaveText('Datos Personales');
})

test('test compruebo formulario', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    const nombre = await page.getByText('Nombre');
    await expect(nombre).toHaveText('Nombre *');
    
    const apellido = await page.getByText('Apellido');
    await expect(apellido).toHaveText('Apellido *')

    const domicilio = await page.getByText('Domicilio');
    await expect(domicilio).toHaveText('Domicilio');

    const telefono = await page.getByText('Telefono');
    await expect(telefono).toHaveText('Telefono')

    const Correo = await page.getByText('Correo Electronico');
    await expect(Correo).toHaveText('Correo Electronico *');

    
    
})

test('Compruebo click del boton', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('button').click();
})






