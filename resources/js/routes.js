const Home =()=>import('./components/Home.vue')
const Contacto =()=>import('./components/Contacto.vue')

const Mostrar = () =>import('./components/categoria/Mostrar.vue')
const Crear = () =>import('./components/categoria/Crear.vue')
const Editar = () =>import('./components/categoria/Editar.vue')
const Login = () =>import('./components/Login.vue')
const Register = () =>import('./components/Register.vue')
const Catalogo = () =>import('./components/Catalogo.vue')
const Administracion = () =>import('./components/Administracion.vue')
const Categorias = () =>import('./components/Categorias.vue')
const Anuncios = () =>import('./components/Anuncios.vue')
const Productos = () =>import('./components/Productos.vue')
const Carrito = () =>import('./components/Carrito.vue')
const MostrarProducto = () =>import('./components/MostrarProducto.vue')
const PerfilUsuario = () =>import('./components/PerfilUsuario.vue')
const DatosUsuario = () =>import('./components/DatosUsuario.vue')
const PedidosUsuario = () =>import('./components/PedidosUsuario.vue')
const DireccionesUsuario = () =>import('./components/DireccionesUsuario.vue')
const MostrarPedido = () =>import('./components/MostrarPedido.vue')
const MostrarPedidoTienda = () =>import('./components/MostrarPedidoTienda.vue')
const PedidosTienda = () =>import('./components/PedidosTienda.vue')
const Usuarios = () =>import('./components/Usuarios.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    },
    {
        name: 'crearCategoria',
        path: '/crearCategoria',
        component: Crear
    },
    {
        name: 'editarCategoria',
        path: '/editarCategoria/:id',
        component: Editar
    },
    {
        name: 'administracion',
        path: '/administracion',
        component: Administracion
    },
    {
        name: 'carrito',
        path: '/carrito',
        component: Carrito
    },
    {
        name: 'categorias',
        path: '/categorias',
        component: Categorias
    },
    {
        name: 'mostrarproducto',
        path: '/mostrarproducto/:id',
        component: MostrarProducto
    },
    {
        name: 'anuncios',
        path: '/anuncios',
        component: Anuncios
    },
    {
        name: 'productos',
        path: '/productos',
        component: Productos
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'registrarse',
        path: '/registrarse',
        component: Register
    },
    {
        name: 'pedidos',
        path: '/pedidos',
        component: PedidosTienda
    },
    {
        name: 'usuarios',
        path: '/usuarios',
        component: Usuarios
    },
    {
        name: 'pedidos',
        path: '/pedidos/:id',
        component: MostrarPedidoTienda
    },
    {
        name: 'catalogo',
        path: '/catalogo',
        component: Catalogo
    },
    {
        name: 'usuario',
        path: '/usuario',
        component: PerfilUsuario,
        children:[
            {
                path: '',
                component: DatosUsuario
            },
            {
                path: 'perfil',
                component: DatosUsuario
            },
            {
                path: 'pedidos',
                component: PedidosUsuario
            },
            {
                path: 'pedidos/:id',
                component: MostrarPedido
            },
            {
                path: 'direcciones',
                component: DireccionesUsuario
            }
        ]
    }
]
