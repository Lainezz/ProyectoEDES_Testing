import unittest
import get_partes as partes

class TestPartes(unittest.TestCase):
    #Especifico un test unitario para probar la funcion de obtener la parte entera
    def test_get_parte_entera(self):
        self.assertEqual(partes.get_parte_entera(1.02), 1)
        self.assertEqual(partes.get_parte_entera(0.2), 0)
        self.assertEqual(partes.get_parte_entera(0), 0)
        self.assertEqual(partes.get_parte_entera(-1), -1)
        self.assertEqual(partes.get_parte_entera(-1.0000002), -1)
        
        with self.assertRaises(TypeError):
            partes.get_parte_entera("0.02")
        
        with self.assertRaises(TypeError):
            partes.get_parte_entera("a")

        self.assertIsInstance(partes.get_parte_entera(1.02), int)
        self.assertIsInstance(partes.get_parte_entera(0.2), int)
        self.assertIsInstance(partes.get_parte_entera(0), int)
        self.assertIsInstance(partes.get_parte_entera(-1), int)
        self.assertIsInstance(partes.get_parte_entera(-1.0000002), int)
    
    def test_get_parte_decimal(self):
        self.assertEqual(partes.get_parte_decimal(1.02), 0.02)
        self.assertEqual(partes.get_parte_decimal(0.2), 0.2)
        self.assertEqual(partes.get_parte_decimal(0), 0.0)
        self.assertEqual(partes.get_parte_decimal(-1), 0.0)
        self.assertEqual(partes.get_parte_decimal(-1.0000002), 0.0000002)
        
        with self.assertRaises(TypeError):
            partes.get_parte_decimal("0.02")
        
        with self.assertRaises(TypeError):
            partes.get_parte_decimal("a")

        self.assertIsInstance(partes.get_parte_decimal(1.02), float)
        self.assertIsInstance(partes.get_parte_decimal(0.2), float)
        self.assertIsInstance(partes.get_parte_decimal(0), float)
        self.assertIsInstance(partes.get_parte_decimal(-1), float)
        self.assertIsInstance(partes.get_parte_decimal(-1.0000002), float)

    #Al haber creado un nuevo método, necesito probarlo también
    def test_is_not_valid(self):
        with self.assertRaises(TypeError):
            partes.is_not_valid("0.02")
        with self.assertRaises(TypeError):
            partes.is_not_valid("a")
        with self.assertRaises(TypeError):
            partes.is_not_valid([1,2,3])
        with self.assertRaises(TypeError):
            partes.is_not_valid(True)
        with self.assertRaises(TypeError):
            partes.is_not_valid(False)
        with self.assertRaises(TypeError):
            partes.is_not_valid(None)

if __name__ == "__main__":
    unittest.main()